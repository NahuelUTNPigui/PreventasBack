/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n93vmko9xuzanug",
    "created": "2024-01-22 18:10:32.720Z",
    "updated": "2024-01-22 18:10:32.720Z",
    "name": "Cliente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nlbslmbi",
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
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug");

  return dao.deleteCollection(collection);
})
