/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sqfgplsdtb38k6w",
    "created": "2024-09-11 01:13:38.324Z",
    "updated": "2024-09-11 01:13:38.324Z",
    "name": "NotaCredito",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "84bzevhl",
        "name": "numero",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dfexetwb",
        "name": "monto",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "lzfru5xj",
        "name": "factura",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "cl48ewfdrlczc0v",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sqfgplsdtb38k6w");

  return dao.deleteCollection(collection);
})
