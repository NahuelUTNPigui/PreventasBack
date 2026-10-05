/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8q0p7k8u7xn1131",
    "created": "2024-09-02 23:38:52.845Z",
    "updated": "2024-09-02 23:38:52.845Z",
    "name": "Detallecobro",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sbonyuz5",
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
      },
      {
        "system": false,
        "id": "wris8j6e",
        "name": "monto",
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
  const collection = dao.findCollectionByNameOrId("8q0p7k8u7xn1131");

  return dao.deleteCollection(collection);
})
