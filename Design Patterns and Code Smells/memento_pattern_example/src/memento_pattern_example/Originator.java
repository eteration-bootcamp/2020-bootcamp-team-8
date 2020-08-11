package memento_pattern_example;

public class Originator {
	private int weapon_state;
	
	public void setWeaponState(int weapon_state) {
		this.weapon_state = weapon_state;
	}
	public int getWeaponState() {
		return weapon_state;
	}
	public Memento saveWeaponState() {
		return new Memento(weapon_state);
	}
	public void getWeaponStateFromMemento(Memento m) {
		weapon_state = m.getWeaponState();
	}
}
