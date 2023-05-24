package issuetracker.issuetracker.domain.label;

import issuetracker.issuetracker.domain.label.dto.LabelFilterDTO;
import issuetracker.issuetracker.domain.label.dto.LabelListDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LabelService {

    private final LabelRepository repository;

    public List<LabelListDTO> getLabelList() {
        return repository.getLabelList();
    }

    public List<LabelFilterDTO> getLabelFilter() {
        return repository.getLabelFilter();
    }

}
