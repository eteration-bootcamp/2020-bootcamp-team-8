
public class Person {
	private String firstName;
	private String lastName;
	private int age;
	
	public Person(String firstName, String lastName, int age) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	
	
	
	@Override
	public String toString() {
		return "firstName= " + firstName + ", lastName= " + lastName + ", age= " + age;
	}



	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public int getAge() {
		return age;
	}
	
	public boolean isAgeOver65() {
		return age >65;
	}
	
	
	
}
