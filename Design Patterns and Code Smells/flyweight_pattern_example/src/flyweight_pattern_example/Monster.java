package flyweight_pattern_example;

public class Monster implements Warrior{
	
	private String skill;
	private String mission;

	public Monster() {
		mission = "DESTROY THE WORLD";
	}
	@Override
	public void assignSkill(String skill) {
		this.skill = skill;
		
	}

	@Override
	public void assignMission() {
		System.out.println(" Monster with a skill of "+skill+" is going to "+mission);
		
	}

}
