//package issuetracker.issuetracker.domain.issue.mapper;
//import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
//import issuetracker.issuetracker.domain.label.dto.LabelDTO;
//import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
//import issuetracker.issuetracker.domain.user.dto.AuthorDTO;
//import org.springframework.dao.DataAccessException;
//import org.springframework.jdbc.core.ResultSetExtractor;
//
//import java.sql.ResultSet;
//import java.sql.SQLException;
//import java.util.*;
//
//public class IssueResultSetExtractor implements ResultSetExtractor<List<IssueDTO>> {
//
//    @Override
//    public List<IssueDTO> extractData(ResultSet rs) throws SQLException, DataAccessException {
//        Map<Long, IssueDTO> issueMap = new HashMap<>();
//
//        while (rs.next()) {
//            long issueId = rs.getLong("issue_id");
//
//            IssueDTO issueDTO = issueMap.get(issueId);
//            if (issueDTO == null) {
//                issueDTO = new IssueDTO();
//                issueDTO.setId(issueId);
//                issueDTO.setTitle(rs.getString("title"));
//                issueDTO.setCreateTime(rs.getTimestamp("create_time").toLocalDateTime());
//                issueDTO.setUpdateTime(rs.getTimestamp("update_time").toLocalDateTime());
//                issueDTO.setIsOpen(rs.getBoolean("is_open"));
//                issueDTO.setMilestone(rs.getString("milestone"));
//
//                AuthorDTO authorDTO = new AuthorDTO();
//                authorDTO.setId(rs.getLong("author_id"));
//                authorDTO.setName(rs.getString("author_name"));
//                authorDTO.setProfileUrl(rs.getString("author_profile_url"));
//                issueDTO.setAuthor(authorDTO);
//
//                issueDTO.setAssignees(new HashSet<>());
//                issueDTO.setLabels(new HashSet<>());
//                issueDTO.setAuthor(new HashSet<>());
//
//                issueMap.put(issueId, issueDTO);
//            }
//
//            long assigneeId = rs.getLong("assignee_id");
//            if (!rs.wasNull() && !containsAssignee(issueDTO, assigneeId)) {
//                AssigneeDTO assigneeDTO = new AssigneeDTO();
//                assigneeDTO.setId(assigneeId);
//                assigneeDTO.setName(rs.getString("assignee_name"));
//                assigneeDTO.setProfile_url(rs.getString("assignee_profile_url"));
//                issueDTO.getAssignees().add(assigneeDTO);
//            }
//
//            long labelId = rs.getLong("label_id");
//            if (!rs.wasNull() && !containsLabel(issueDTO, labelId)) {
//                LabelDTO labelDTO = new LabelDTO();
//                labelDTO.setId(labelId);
//                labelDTO.setTitle(rs.getString("label_name"));
//                labelDTO.setBackgroundColor(rs.getString("background_color"));
//                labelDTO.setFontColor(rs.getString("font_color"));
//                issueDTO.getLabels().add(labelDTO);
//            }
//
//            long commentAuthorId = rs.getLong("comment_id");
//            if (!rs.wasNull()) {
//                issueDTO.getCommentAuthorId().add(commentAuthorId);
//            }
//        }
//
//        return new ArrayList<>(issueMap.values());
//    }
//
//    private boolean containsAssignee(IssueDTO issueDTO, long assigneeId) {
//        for (AssigneeDTO assignee : issueDTO.getAssignees()) {
//            if (assignee.getId() == assigneeId) {
//                return true;
//            }
//        }
//        return false;
//    }
//
//    private boolean containsLabel(IssueDTO issueDTO, long labelId) {
//        for (LabelDTO label : issueDTO.getLabels()) {
//            if (label.getId() == labelId) {
//                return true;
//            }
//        }
//        return false;
//    }
//}