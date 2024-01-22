/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1r2tkc39jdy2y57",
    "created": "2024-01-22 18:10:16.888Z",
    "updated": "2024-01-22 18:10:16.888Z",
    "name": "Remito",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zax3qy0g",
        "name": "fechaIngreso",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57");

  return dao.deleteCollection(collection);
})
