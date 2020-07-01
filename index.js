class Tribe {
    constructor(name) {
        this.name = name;
    }
    // PersonType.prototype.sayName과 동일합니다.
    sayName() {
        console.log(this.name);
    }
}
const hive = new Tribe("hive");
hive.sayName();