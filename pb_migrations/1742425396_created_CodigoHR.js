/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "11z5vcsy5vhzctn",
    "created": "2025-03-19 23:03:16.936Z",
    "updated": "2025-03-19 23:03:16.936Z",
    "name": "CodigoHR",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mfhqu6jr",
        "name": "maximo",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("11z5vcsy5vhzctn");

  return dao.deleteCollection(collection);
})
