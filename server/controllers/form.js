const sequelize = require("sequelize");
const db = require("../models/index");
const SupplierInfo = require("../models").SupplierInfo;
const NaicsCodes = require("../models").NaicsCodes;
const AdministrativeContact = require("../models").AdministrativeContact;
const SicCodes = require("../models").SicCodes;
const Services = require("../models").Services;
const CdwContacts = require("../models").CdwContacts;
const Products = require("../models").Products;
const Awards = require("../models").Awards;
const Clients = require("../models").Clients;
const Certifications = require("../models").Certifications;
const Partners = require("../models").Partners;
const ManagementTeams = require("../models").ManagementTeams;
const SalesContact = require("../models").SalesContact;
const SupplierContact = require("../models").SupplierContact;

const associations = [
  {
    model: NaicsCodes,
    as: "naicsCodes",
  },
  {
    model: AdministrativeContact,
    as: "administrativeContact",
  },
  {
    model: SalesContact,
    as: "salesContact",
  },
  {
    model: SupplierContact,
    as: "supplierContact",
  },
  {
    model: SicCodes,
    as: "sicCodes",
  },
  {
    model: Services,
    as: "services",
  },
  {
    model: CdwContacts,
    as: "cdwContacts",
  },
  {
    model: Products,
    as: "products",
  },
  {
    model: Awards,
    as: "awards",
  },
  {
    model: Clients,
    as: "clients",
  },
  {
    model: Certifications,
    as: "certifications",
  },
  {
    model: Partners,
    as: "partners",
  },
  {
    model: ManagementTeams,
    as: "managementTeams",
  },
];

function getModelPromise(model, id) {
  return model.findAll({
    where: {
      supplierInfoId: id,
    },
  });
}

module.exports = {
  listOne(req, res) {
    return SupplierInfo.findAll({
      where: {
        id: req.params.id,
      }
    })
      .then((suppliers) => {
        if (suppliers === null || suppliers.length === 0) {
          throw new Error(`Supplier with ID ${req.params.id} not found`);
        }

        Promise.all(associations.map((a) => getModelPromise(a.model, suppliers[0].id)))
        .then((responses) => {
          const data = {}

          associations.forEach((a, i) => {
            data[a.as] = responses[i]
          })

          data.id = suppliers[0].id
          data.name = suppliers[0].name
          data.address = suppliers[0].address
          data.state = suppliers[0].state
          data.city = suppliers[0].city
          data.image = suppliers[0].image
          data.postalCode = suppliers[0].postalCode
          data.website = suppliers[0].website
          data.description = suppliers[0].description
          data.duns = suppliers[0].duns

          res.status(201).send({
              data,
          });
        })
        .catch((error) => {
          throw error;
        })
      })
      .catch((error) =>
        res.status(400).send({
          error: error.message,
        })
      );
  },

  create(req, res) {
    return SupplierInfo.create(req.body, {
      include: associations,
    })
      .then((resp) => res.status(201).send(resp))
      .catch((error) =>
        res.status(400).send({
          error: error.message,
        })
      );
  },

  listAll(req, res) {
    const searchField = req.body.searchField;
    const searchTerm = `%${req.body.searchTerm.toLowerCase()}%`;
    const limit = req.body.pageSize;
    const offset = req.body.pageSize * (req.body.pageNumber - 1);

    let whereField = "";
    if (searchField === "services") {
      whereField = `S."name"`;
    } else if (searchField === "products") {
      whereField = `P."value"`;
    } else if (searchField === "certifications") {
      whereField = `C."name"`;
    } else {
      whereField = `SI."${searchField}"`;
    }

    const queryNoLimit = `SELECT SI."id", SI."name", SI."city", SI."state", 
    array_to_string(array_agg(distinct C.name),', ') AS certifications,
    array_to_string(array_agg(distinct P.value),', ') AS products,
    array_to_string(array_agg(distinct S.name),', ') AS services 
    FROM public."SupplierInfo" SI 
    left outer join public."Certifications" C ON C."supplierInfoId" = si."id"
    left outer join public."Products" P ON P."supplierInfoId" = si."id"
    left outer join public."Services" S ON S."supplierInfoId" = si."id"
    WHERE ${whereField} ILIKE :searchTerm
    GROUP BY SI."id", SI."name", SI."city", SI."state"`;

    const queryWithLimit = `${queryNoLimit}
    LIMIT :limit OFFSET :offset`;

    const queryCount = `SELECT COUNT(*) AS Count FROM (${queryNoLimit}) AS SUB`;

    const queryPromise = db.sequelize.query(queryWithLimit, {
      replacements: {
        searchTerm: searchTerm,
        limit: limit,
        offset: offset,
      },
      type: db.sequelize.QueryTypes.SELECT,
    });

    const queryCountPromise = db.sequelize.query(queryCount, {
      replacements: {
        searchTerm: searchTerm,
      },
      type: db.sequelize.QueryTypes.SELECT,
    });

    Promise.all([queryPromise, queryCountPromise])
      .then(function (responses) {
        return res.status(201).send({
          data: responses[0],
          count: responses[1][0].count,
        });
      })
      .catch((error) => {
        return res.status(400).send({
          error: error.message,
        });
      });
  },
};
