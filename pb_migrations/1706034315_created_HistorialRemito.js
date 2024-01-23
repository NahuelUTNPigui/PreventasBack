/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1gnl04tjvfgi8m2",
    "created": "2024-01-23 18:25:15.424Z",
    "updated": "2024-01-23 18:25:15.424Z",
    "name": "HistorialRemito",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qbevjuo1",
        "name": "ultimoRemito",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1r2tkc39jdy2y57",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("1gnl04tjvfgi8m2");

  return dao.deleteCollection(collection);
})
