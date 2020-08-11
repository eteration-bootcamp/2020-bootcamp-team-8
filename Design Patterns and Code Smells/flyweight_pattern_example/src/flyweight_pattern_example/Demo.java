package flyweight_pattern_example;
import java.util.Random;
public class Demo {
	
	private static String[] warriorType = {"Human","Monster"};
	private static String[] skills = {"ICE ATTACK","FIRE ATTACK","STOPPING TIME","ELECTRIC SHOCK","HEAL","RESURRECT"};
	public static void main(String[] args) {
		
		for(int i = 0;i<20;i++) {
			Warrior w = WarriorFactory.getWarrior(getWarriorType());
			w.assignSkill(getSkill());
			w.assignMission();
		}
	}
	public static String getWarriorType() {
		Random r = new Random();
		int rand =r.nextInt(warriorType.length);
		return warriorType[rand];
	}
	public static String getSkill() {
		Random r = new Random();
		int rand =r.nextInt(skills.length);
		return skills[rand];
	}

}
