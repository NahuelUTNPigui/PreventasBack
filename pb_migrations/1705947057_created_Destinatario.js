/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hohl6xycaxl2fje",
    "created": "2024-01-22 18:10:57.425Z",
    "updated": "2024-01-22 18:10:57.425Z",
    "name": "Destinatario",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uwoq61hs",
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
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje");

  return dao.deleteCollection(collection);
})
