package flyweight_pattern_example;
import java.util.HashMap;
public class WarriorFactory {

	private static HashMap<String,Warrior> hm = new HashMap<String,Warrior>();
	
	public static Warrior getWarrior(String type) {
		Warrior w = null;
		if(hm.containsKey(type)) {
			
			w = hm.get(type);
			
		}else {
			switch (type) 
			{
			case "Human":
				System.out.println("New Human is created");
				w = new Human();
				break;
			
			case "Monster":
				System.out.println("New Monster is created");
				w = new Monster();
				break;
				
			}
			hm.put(type,w);
		}
		return w;
	}
	
}
