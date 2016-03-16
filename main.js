prism.on('dashboardloaded', function() {

    if (prism.activeDashboard) {

        var filterArray = prism.activeDashboard.filters.$$items[0].levels,
               position = filterArray[0].filter.members[0],
               workflow = filterArray[1].filter.members[0];

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
    }

});
