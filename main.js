prism.on('dashboardloaded', function() {

    var filterArray;
    if (prism.activeDashboard) {
        prism.activeDashboard.filters.$$items.forEach(function(i) {
            if (i.hasOwnProperty('levels') && i.levels[0].column === 'position_type') {
                filterArray = i.levels;
                position = filterArray[0].filter.members[0];
                workflow = filterArray[1].filter.members[0];
                return;
            }
        });
    }

    var position = filterArray[0].column,
        workflow = filterArray[1].column;

    switch (filterArray.length > 0) {
        case position === 'Student':
            console.log(workflow);
            // disable faculty and and staff posting workflow filters
            break;
        case position === 'Faculty':
            console.log(workflow);
            // disable student and staff posting workflow filters
            break;
        case position === 'Staff':
            console.log(workflow);
            // dsiable student and faculty posting workflow filters
            break;
        default:
            console.log('no position specified');
            break;
            // set a default position maybe?
    }

});
