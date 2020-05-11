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
const State = require("../models").State;
const City = require("../models").City;
const Certificate = require("../models").Certificate;

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
  listAllStates(req, res) {
    return State.findAll({})
      .then((states) => {
        res.status(201).send({
          data: {
            states: states,
          },
        });
      })
      .catch((error) =>
        res.status(400).send({
          error: error.message,
        })
      );
  },

  listAllCertificates(req, res) {
    return Certificate.findAll({})
      .then((certifications) => {
        res.status(201).send({
          data: {
            certifications: certifications.map(c => c.name),
          },
        });
      })
      .catch((error) =>
        res.status(400).send({
          error: error.message,
        })
      );
  },

  listAllCities(req, res) {
    return State.findAll({
      where: {
        id: Number(req.params.id, 10),
      },
      include: [{ model: City, as: "cities" }],
    })
      .then((states) => {
        const cities =
          states.length > 0 ? states[0].cities.map((c) => c.name) : [];

        res.status(201).send({
          data: {
            cities: cities,
          },
        });
      })
      .catch((error) =>
        res.status(400).send({
          error: error.message,
        })
      );
  },

  listOne(req, res) {
    return SupplierInfo.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then((suppliers) => {
        if (suppliers === null || suppliers.length === 0) {
          throw new Error(`Supplier with ID ${req.params.id} not found`);
        }

        Promise.all(
          associations.map((a) => getModelPromise(a.model, suppliers[0].id))
        )
          .then((responses) => {
            const data = {};

            associations.forEach((a, i) => {
              data[a.as] = responses[i];
            });

            data.id = suppliers[0].id;
            data.name = suppliers[0].name;
            data.address = suppliers[0].address;
            data.state = suppliers[0].state;
            data.city = suppliers[0].city;
            data.image = suppliers[0].image;
            data.postalCode = suppliers[0].postalCode;
            data.website = suppliers[0].website;
            data.description = suppliers[0].description;
            data.duns = suppliers[0].duns;

            res.status(201).send({
              data,
            });
          })
          .catch((error) => {
            throw error;
          });
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

    let where = "";
    if (searchField === "services") {
      where = `WHERE S."name" ILIKE `;
    } else if (searchField === "products") {
      where = `WHERE P."value" ILIKE `;
    } else if (searchField === "certifications") {
      where = `WHERE C."name" ILIKE `;
    } else if (searchField === "naicscodes") {
      where = `WHERE CAST(N."value" AS TEXT) ILIKE `;
    } else if (searchField === "siccodes") {
      where = `WHERE CAST(SIC."value" AS TEXT) ILIKE `;
    } else {
      where = `WHERE SI."${searchField}" ILIKE `;
    }

    const orderBy = `ORDER BY SI."${req.body.orderBy[0]}" ${req.body.orderBy[1]}`;

    const queryNoLimit = `SELECT SI."id", SI."name", SI."city", SI."state", 
    array_to_string(array_agg(distinct C.name),', ') AS certifications,
    array_to_string(array_agg(distinct P.value),', ') AS products,
    array_to_string(array_agg(distinct S.name),', ') AS services,
	array_to_string(array_agg(distinct N.value),', ') AS naicscodes,
	array_to_string(array_agg(distinct SIC.value),', ') AS siccodes 
    FROM public."SupplierInfo" SI 
    left outer join public."Certifications" C ON C."supplierInfoId" = si."id"
    left outer join public."Products" P ON P."supplierInfoId" = si."id"
    left outer join public."Services" S ON S."supplierInfoId" = si."id"
	left outer join public."NaicsCodes" N ON N."supplierInfoId" = si."id"
	left outer join public."SicCodes" SIC ON SIC."supplierInfoId" = si."id"
    ${where} :searchTerm
    GROUP BY SI."id", SI."name", SI."city", SI."state"
    ${orderBy}`;

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
