
public class PatientInfo {
	private Person patient;
	private int hight; //in cm
	private int weight; //in kg
	private boolean smokingPolicy;
	
	public PatientInfo(Person patient, int hight, int weight, boolean smokingPolicy) {
		this.patient = patient;
		this.hight = hight;
		this.weight = weight;
		this.smokingPolicy = smokingPolicy;
	}

	@Override
	public String toString() {
		return patient + ", hight= " + hight + ", weight= " + weight + ", smokingPolicy= "
				+ smokingPolicy;
	}

	public Person getPatient() {
		return patient;
	}

	public int getHight() {
		return hight;
	}

	public int getWeight() {
		return weight;
	}

	public boolean isSmokingPolicy() {
		return smokingPolicy;
	}
	
	public double getBMI() {
		return (weight * 10000.0) / (hight * hight);
	}
	
	public int getRisk() {
		int riskFactor = 0;
		double bmi = this.getBMI();
		
		if(bmi < 18.5 || (bmi > 25 && bmi<29.9)) {riskFactor++;}
		else if (bmi > 30) {riskFactor+=2;}
		
		if(patient.isAgeOver65()) {riskFactor++;}
		if(smokingPolicy) {riskFactor++;}
		
		return riskFactor;
	}
}
