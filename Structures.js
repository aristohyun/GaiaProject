class Structure{
	//이름
	//파워
	//비용
	//최대갯수
	constructor(owner,name,power,cost,maxNum) {
		this.owner = owner;
        this.name = name;
		this.power = power;
		this.cost = cost;
		this.maxNum = maxNum;
    }
	isNeighborExist(){
		if(true) return true;
		else return false;
	}
	increasePower(){
		this.power += 1;
		//메안-의회능력, 큰큰이-큰큰이타일
	}
	getName(){
		return this.name;
	}
	getPower(){
		return this.power;
	}
	getCost(){
		return this.cost;
	}
	getMaxNum(){
		return this.MaxNum;
	}
	
}
class Mine extends Structure {
	constructor(){
		this.name = "mine";
		this.power = 1;
		this.cost = { Credit:2, Ore:1 };
		this.maxNum = 8;
	}
	build(){
		
	}
}
class TradingStations extends Structure {
	constructor(){
		this.name = "TradingStations";
		this.power = 2;
		this.cost = { Credit:6, Ore:2 };
		this.maxNum = 4;
	}
	upgrade(){
		
	}
}
class ResearchLabs extends Structure {
	constructor(){
		this.name = "ResearchLabs";
		this.power = 2;
		this.cost = { Credit:5, Ore:3 };
		this.maxNum = 3;
	}
	upgrade(){
		
	}
}
class PlanetaryInstitute extends Structure {
	constructor(){
		this.name = "PlanetaryInstitute";
		this.power = 3;
		this.cost = { Credit:6, Ore:4 };
		this.maxNum = 1;
	}
		upgrade(){
		
	}
}
class Academies extends Structure {
	constructor(){
		this.name = "Academies";
		this.power = 3;
		this.cost = { Credit:6, Ore:6 };
		this.maxNum = 2;
	}
		upgrade(){
		
	}
}
