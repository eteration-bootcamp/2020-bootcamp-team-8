package memento_pattern_example;
import java.util.ArrayList;
import java.util.List;
public class CareTaker {

	private List<Memento> memento = new ArrayList<Memento>();
	public void add(Memento s) {
		memento.add(s);
	}
	public Memento get(int index) {
		return memento.get(index);
	}
}
