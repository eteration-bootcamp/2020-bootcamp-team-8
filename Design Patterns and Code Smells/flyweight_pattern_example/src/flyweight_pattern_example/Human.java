package flyweight_pattern_example;

public class Human implements Warrior{

	private String skill;
	private String mission;
	
	public Human() {
		mission = "SAVE THE WORLD";
	}
	@Override
	public void assignSkill(String skill) {
		this.skill = skill;
		
	}

	@Override
	public void assignMission() {
		System.out.println(" Human with a skill of "+skill+" is going to "+mission);
		
	}

}
