/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xgi6dfrvf1chksf",
    "created": "2024-09-02 23:39:15.142Z",
    "updated": "2024-09-02 23:39:15.142Z",
    "name": "Detalleretencion",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i2kelumq",
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
        "id": "at9xkjdf",
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
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf");

  return dao.deleteCollection(collection);
})
