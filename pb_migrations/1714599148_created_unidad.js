/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "911j68co7qrcwj8",
    "created": "2024-05-01 21:32:28.359Z",
    "updated": "2024-05-01 21:32:28.359Z",
    "name": "unidad",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bdxlemzs",
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
        "id": "4kxlo5p1",
        "name": "descripcion",
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
  const collection = dao.findCollectionByNameOrId("911j68co7qrcwj8");

  return dao.deleteCollection(collection);
})
