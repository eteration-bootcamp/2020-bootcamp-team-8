package memento_pattern_example;

public class Demo {

	public static void main(String[] args) {
		
		Originator o = new Originator();
		CareTaker c = new CareTaker();
		
		o.setWeaponState(1);
		o.setWeaponState(3);
		c.add(o.saveWeaponState());
		o.setWeaponState(6);
		c.add(o.saveWeaponState());
		
		System.out.println("Current state : "+o.getWeaponState());
		o.getWeaponStateFromMemento(c.get(0));//undo method
		System.out.println("first saved state : "+o.getWeaponState());
		System.out.println("After undo, state : "+o.getWeaponState());

	}

}
