/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rn5oogr7yhg1dog",
    "created": "2024-01-22 18:11:14.792Z",
    "updated": "2024-01-22 18:11:14.792Z",
    "name": "Estado",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e8mdzvtw",
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
  const collection = dao.findCollectionByNameOrId("rn5oogr7yhg1dog");

  return dao.deleteCollection(collection);
})
