/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2hk2qfpfwi9mhm0",
    "created": "2024-01-22 18:11:40.325Z",
    "updated": "2024-01-22 18:11:40.325Z",
    "name": "Localidad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "8s7gmbbv",
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
  const collection = dao.findCollectionByNameOrId("2hk2qfpfwi9mhm0");

  return dao.deleteCollection(collection);
})
