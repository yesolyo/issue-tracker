package issuetracker.issuetracker.domain.label;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.label.dto.LabelFilterDTO;
import issuetracker.issuetracker.domain.label.dto.LabelListDTO;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LabelRepository extends CrudRepository<Label, Long> {


    @Query("SELECT " +
            "label.label_id AS id, " +
            "label.title AS title, " +
            "label.contents AS contents " +
            "label.background_color AS background_color " +
            "FROM label")
    List<LabelListDTO> getLabelList();

    @Query("SELECT " +
            "label.label_id AS id, " +
            "label.title AS title, " +
            "label.background_color AS background_color " +
            "FROM label")
    List<LabelFilterDTO> getLabelFilter();
}
