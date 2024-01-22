/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ycv2rl3vzyv3lbg",
    "created": "2024-01-22 18:11:28.319Z",
    "updated": "2024-01-22 18:11:28.319Z",
    "name": "Provincia",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zjrbg53m",
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
  const collection = dao.findCollectionByNameOrId("ycv2rl3vzyv3lbg");

  return dao.deleteCollection(collection);
})
