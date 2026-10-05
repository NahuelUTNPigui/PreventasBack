/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lynb78wmk8ksvie",
    "created": "2025-02-08 16:48:14.211Z",
    "updated": "2025-02-08 16:48:14.211Z",
    "name": "Banco",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0qacwwri",
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
  const collection = dao.findCollectionByNameOrId("lynb78wmk8ksvie");

  return dao.deleteCollection(collection);
})
