"use strict";

function getDiagnosticName(id, diagnostics) {

    const d = diagnostics.find(x => x.id === id);

    if (!d)
        return "(Unknown)";

    return d.name;

}