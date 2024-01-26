onRecordBeforeCreateRequest((e) => {
    // skip if admin 
    if (e.httpContext.get("admin")) {
        return;
    }

    e.record.set("active", true)
}, "Estado")