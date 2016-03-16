prism.on('dashboardloaded', function(dimension) {

    var workflow, position,
        dash = prism.activeDashboard, options = { save: true, refresh: true };

    if (dash) {
        dash.filters.$$items.forEach(function(i) {
            if (i.hasOwnProperty('jaql') && i.jaql.column === 'position_type') position = i.jaql.filter;
            if (i.hasOwnProperty('jaql') && i.jaql.column === 'workflow') workflow = i.jaql.filter;
            else return;
        });
    }

    switch (dash.filters.$$items.length > 0) {
        case position.members[0] === 'Student':

            dash.filters.update({
                jaql: {
                    dim: dimension,
                    filter: { members: ['Student Posting Workflow'] },
                    datatype: 'text'
                }
            }, options);

            dash.on('filterschanged', function(dash, update, jaql) {
                // update filters element to reflect changes
            });
            break;

        case position.members[0] === 'Faculty':
            dash.filters.update({
                jaql: {
                    dim: dimension,
                    filter: { members: ['Faculty Posting Workflow'] },
                    datatype: 'text'
                }
            }, options);

            dash.on('filterschanged', function(dash, update, jaql) {
                // update filters element to reflect changes
            });
            break;

        case position.members[0] === 'Staff':
            dash.filters.update({
                jaql: {
                    dim: dimension,
                    filter: { members: ['Staff HR Workflow'] },
                    datatype: 'text'
                }
            }, options);

            dash.on('filterschanged', function(dash, update, jaql) {
                // update filters element to reflect changes
            });
            break;

        default:
            break;
    }
});
