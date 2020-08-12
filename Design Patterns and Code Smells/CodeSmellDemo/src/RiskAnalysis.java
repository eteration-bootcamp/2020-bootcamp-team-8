
public class RiskAnalysis {
	
	private Patient patient;
	
	public RiskAnalysis(Patient patient) {
		this.patient = patient;
	}

	public int getRisk() {
		int riskFactor = 0;
		double bmi = (patient.getWeight()* 10000.0) / (patient.getHight() * patient.getHight());
		
		if(bmi < 18.5 || (bmi > 25 && bmi<29.9)) {riskFactor++;}
		else if (bmi > 30) {riskFactor+=2;}
		
		if(patient.getAge() > 65) {riskFactor++;}
		if(patient.getsmokingPolicy()) {riskFactor++;}
		
		return riskFactor;
	}
	
}
