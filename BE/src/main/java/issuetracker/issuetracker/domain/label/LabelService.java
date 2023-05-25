package issuetracker.issuetracker.domain.label;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LabelService {

    public final LabelRepository labelRepository;
}
