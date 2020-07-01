class Faction {
	//이름
	//시작자원
	//종족능력
	//의회능력
	//업그레이드 방향
	//생산량
    constructor(name,startResource,basicIncome) {
        this.name = name;
		this.startResource = startResource;
		this.basicIncome = basicIncome;
    }
	factionAbility(){
	}
	instituteAbility(){
	}
}

class hive extends Faction{
	constructor(){
		this.name = "hive";
		this.startResource =  { Credit:15, Ore:4, Knowledge:3, QIC:1};
		this.basicIncome = {Credit:0, Ore:1, Knowledge:1, QIC:1}
	}
	factionAbility(){
		
	}
	instituteAbility(){
		
	}
}