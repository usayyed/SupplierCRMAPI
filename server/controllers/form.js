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

module.exports = {
  create(req, res) {
    console.log(req.body);
    return SupplierInfo.create(req.body, {
      include: [
        {
          model: NaicsCodes,
          as: "naicsCodes"
        },
        {
          model: AdministrativeContact,
          as: "administrativeContact"
        },
        {
          model: SalesContact,
          as: "salesContact"
        },
        {
          model: SupplierContact,
          as: "supplierContact"
        },
        {
          model: SicCodes,
          as: "sicCodes"
        },
        {
          model: Services,
          as: "services"
        },
        {
          model: CdwContacts,
          as: "cdwContacts"
        },
        {
          model: Products,
          as: "products"
        },
        {
          model: Awards,
          as: "awards"
        },
        {
          model: Clients,
          as: "clients"
        },
        {
          model: Certifications,
          as: "certifications"
        },
        {
          model: Partners,
          as: "partners"
        },
        {
          model: ManagementTeams,
          as: "managementTeams"
        }
      ]
    })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  }
};
