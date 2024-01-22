/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "whppq2fqfk11qm6",
    "created": "2024-01-22 18:12:19.831Z",
    "updated": "2024-01-22 18:12:19.831Z",
    "name": "Vehiculo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b1wxnvaa",
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
  const collection = dao.findCollectionByNameOrId("whppq2fqfk11qm6");

  return dao.deleteCollection(collection);
})
