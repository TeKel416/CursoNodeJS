class CommandParser {

    constructor(drone){
        this.parseCommand = function parseCommand(line){
            if(line == 'takeoff'){
                drone.onTakeoff();
                return true;
            };

            if(line == 'land'){
                drone.onLand();
                return true;
            };

            if(line.startsWith() == 'forward'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onForward(dist);
                return true;
            };
            
            if(line.startsWith() == 'back'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onBack(dist);
                return true;
            };

            if(line.startsWith() == 'right'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onRight(dist);
                return true;
            };

            if(line.startsWith() == 'left'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onLeft(dist);
                return true;
            };
            
            if(line.startsWith() == 'cw'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onCw(dist);
                return true;
            };

            if(line.startsWith() == 'ccw'){
                //divide a string por ' ' em uma lista e guarda o último valor em dist
                const [, dist] = line.split(' ');
                drone.onCcw(dist);
                return true;
            };

            if(line == 'battery'){
                drone.onBattery(line);
                return true;
            };
            
            if(line.startsWith() == 'flip'){
                const [, direction] = line.split(' ');
                drone.onFlip(direction);
                return true;
            };

            return false;
        };
    };

};

module.exports = CommandParser;