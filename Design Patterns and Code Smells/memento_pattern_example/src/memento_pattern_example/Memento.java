package memento_pattern_example;

public class Memento {

	private int weapon_state;
	
	public Memento(int weapon_state) {
		this.weapon_state = weapon_state;
	}
	public int getWeaponState() {
		return weapon_state;
	}
}
