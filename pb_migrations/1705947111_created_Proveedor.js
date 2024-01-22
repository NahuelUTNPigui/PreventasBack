/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ktuzvvkcsbsch5x",
    "created": "2024-01-22 18:11:51.545Z",
    "updated": "2024-01-22 18:11:51.545Z",
    "name": "Proveedor",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d6ynzgds",
        "name": "nombre",
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
  const collection = dao.findCollectionByNameOrId("ktuzvvkcsbsch5x");

  return dao.deleteCollection(collection);
})
