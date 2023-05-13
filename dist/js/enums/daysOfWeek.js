export var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["sunday"] = 0] = "sunday";
    daysOfWeek[daysOfWeek["monday"] = 1] = "monday";
    daysOfWeek[daysOfWeek["tuesday"] = 2] = "tuesday";
    daysOfWeek[daysOfWeek["wednesday"] = 3] = "wednesday";
    daysOfWeek[daysOfWeek["thursday"] = 4] = "thursday";
    daysOfWeek[daysOfWeek["friday"] = 5] = "friday";
    daysOfWeek[daysOfWeek["saturday"] = 6] = "saturday";
})(daysOfWeek || (daysOfWeek = {}));
