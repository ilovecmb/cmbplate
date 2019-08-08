let app = angular.module("app", []);

app.controller("controller", ($scope) => {
    $scope.search = () => {
        if (!($scope.isRemind = !!!$scope.plate)){
            let obj = getPlatesByText($scope.plate.toUpperCase());
            if (!($scope.isRemind = !!!obj)){
                $scope.title = `Plate: ${obj.plate}`;
                $scope.desc = `Description: ${obj.description}`;
            }
        }
    }
})

let getPlatesByText = (plate) => {
    return isAM(plate) || json.filter(x => x.plate.toUpperCase().includes(plate))[0];
}

let isAM = (plate) => {
    return plate.substring(0, 2) === "AM" ? {"plate" : plate, "description" : "AM車（政府車）"} : undefined;
}