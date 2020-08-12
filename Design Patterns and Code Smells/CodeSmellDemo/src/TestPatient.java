
public class TestPatient {

	public static void main(String[] args) {
		Patient patient = new Patient("Jennifer","Smith",32,165,60,false);
		RiskAnalysis risk = new RiskAnalysis(patient);
		Person person = new Person("Paul","Audras",70);
		PatientInfo pi = new PatientInfo(person,178,100,true);
		
		System.out.println(patient.toString() + " risk level= "+ risk.getRisk());
		System.out.println(pi.toString() + " risk level= "+ pi.getRisk() + " bmi= " + pi.getBMI());
		
		

	}

}
