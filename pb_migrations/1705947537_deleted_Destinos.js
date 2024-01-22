/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9fj2rpb7xq75k1x");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9fj2rpb7xq75k1x",
    "created": "2024-01-22 14:33:11.282Z",
    "updated": "2024-01-22 14:33:11.282Z",
    "name": "Destinos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nadgazyy",
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
})
