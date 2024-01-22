/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "04wfb4ofl0e6jn7",
    "created": "2024-01-22 18:12:06.198Z",
    "updated": "2024-01-22 18:12:06.198Z",
    "name": "Chofer",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m18ou42s",
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
  const collection = dao.findCollectionByNameOrId("04wfb4ofl0e6jn7");

  return dao.deleteCollection(collection);
})
