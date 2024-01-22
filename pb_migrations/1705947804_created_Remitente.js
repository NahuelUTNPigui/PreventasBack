/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "99kqu0vxib506et",
    "created": "2024-01-22 18:23:24.742Z",
    "updated": "2024-01-22 18:23:24.742Z",
    "name": "Remitente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "olzzocyd",
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
      },
      {
        "system": false,
        "id": "9t7cui4w",
        "name": "cliente",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "n93vmko9xuzanug",
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
  const collection = dao.findCollectionByNameOrId("99kqu0vxib506et");

  return dao.deleteCollection(collection);
})
