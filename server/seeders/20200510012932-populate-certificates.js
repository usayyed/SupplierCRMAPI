'use strict';

const certificates = [
  "NMSDC",
"NWMMSDC",
"WRMSDC",
"SCMSDC",
"PSWMSDC",
"MPMSDC",
"NCMSDC",
"DFWMSDC",
"SMSDC",
"SRMSDC",
"HMSDC",
"FSMSDC",
"GMSDC",
"TSMSDC",
"CVMSDC",
"MSMSDC",
"CMSDC",
"OMSDC",
"MMSDC",
"CRMSDC",
"EMSDC",
"NYNJMSDC",
"GNEMSDC",
"WBENC",
"CWE",
"GWBC",
"WBDC Midwest",
"WBC Southwest",
"WBEA",
"WBEC East",
"WBEC Florida",
"WBEC ORV",
"WBEC Pacific",
"WBEC South",
"WBEC West",
"WPEO-DC",
"WPEO-NY",
"WBE",
"MBE",
"WMBE",
"MWBE",
"Veteran",
"DVBE",
"NVBDC",
"VOSB",
"SDVOSB",
"LGBT",
"LGBTQ",
"LGBTE",
"NGLCC",
"SBE",
"DBE",
"DOT-MBE",
"DOT-DBE",
"DOT-SBE",
"LBE",
"WEConnect",
"HUBZone",
"GSA",
"State",
"DGS",
"SB",
"SDB",
"WOSB",
"8(a)",
"County",
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Certificate', 
      certificates.map((c) =>{
        return {
          'name': c
        }
      })
   , {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Certificate', null, {});
  }
};
