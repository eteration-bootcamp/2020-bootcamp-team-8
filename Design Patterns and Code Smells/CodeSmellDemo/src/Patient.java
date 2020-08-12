
public class Patient extends Person {
	private int hight; //in cm
	private int weight; //in kg
	private boolean smokingPolicy;
	
	public Patient(String firstName, String lastName, int age, int hight , int weight , boolean smokingPolicy) {
		super(firstName, lastName, age);
		this.hight = hight;
		this.weight = weight;
		this.smokingPolicy = smokingPolicy;
	}

	
		
	@Override
	public String toString() {
		return super.toString() + ", hight= " + hight + ", weight= " + weight + ", smokingPolicy= " + smokingPolicy;
	}



	public int getHight() {
		return hight;
	}

	public int getWeight() {
		return weight;
	}
	
	public boolean getsmokingPolicy() {
		return smokingPolicy;
	}
	
	
}
