import {Component, OnInit} from '@angular/core';
import {FadeInTop} from "../../shared/animations/fade-in-top.decorator";

@FadeInTop()
@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
})
export class ProjectsListComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public options = {
  "ajax": 'assets/api/project-list.json',
  "iDisplayLength": 15,
  "columns": [
    {
      "class": 'details-control',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    },
    {"data": "name"},
    {"data": "est"},
    {"data": "contacts"},
    {"data": "status"},
    {"data": "target-actual"},
    {"data": "starts"},
    {"data": "ends"},
    {"data": "tracker"}
  ],
  "order": [[1, 'asc']]
}

  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px">Nome:</td>
                <td>${d.name}</td>
            </tr>
            <tr>
                <td>Última atualização:</td>
                <td>${d.ends}</td>
            </tr>
            <tr>
                <td>Conceito:</td>
                <td>Mais detalhes descrever aqui</td>
            </tr>
            <tr>
                <td>Comentários:</td>
                <td>${d.comments}</td>
            </tr>
            <tr>
                <td>Ação:</td>
                <td>${d.action}</td>
            </tr></tbody>
        </table>`
  }


}
