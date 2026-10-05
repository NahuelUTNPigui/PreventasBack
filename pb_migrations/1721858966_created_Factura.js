/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cl48ewfdrlczc0v",
    "created": "2024-07-24 22:09:26.810Z",
    "updated": "2024-07-24 22:09:26.810Z",
    "name": "Factura",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bxbgozkd",
        "name": "codCliente",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "n93vmko9xuzanug",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "aaikxoyj",
        "name": "cobrado",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "6wpvgxam",
        "name": "monthyear",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("cl48ewfdrlczc0v");

  return dao.deleteCollection(collection);
})
