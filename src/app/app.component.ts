import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
dummydata:any= [
    {
        "templates": [
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "Ready425484646",
                "templatetype": "engagement",
                "DateofCreated": "2022-01-31 14:46:57.000000",
                "FirmTemplateID": 277,
                "mastertemplateid": null,
                "templatefolderid": 333,
                "createmodifydelete": 1
            },
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "Ready456",
                "templatetype": "engagement",
                "DateofCreated": "2022-01-31 14:47:13.000000",
                "FirmTemplateID": 278,
                "mastertemplateid": null,
                "templatefolderid": 333,
                "createmodifydelete": 1
            },
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "Ready23451",
                "templatetype": "engagement",
                "DateofCreated": "2022-01-31 14:47:32.000000",
                "FirmTemplateID": 279,
                "mastertemplateid": null,
                "templatefolderid": 333,
                "createmodifydelete": 1
            }
        ],
        "foldername": "Test Case",
        "templatefolderid": 333,
        "firmuseraccountid": 5272,
        "createmodifydelete": 1
    },
    {
        "templates": [
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "Qwertyu789",
                "templatetype": "engagement",
                "DateofCreated": "2022-01-31 14:48:32.000000",
                "FirmTemplateID": 280,
                "mastertemplateid": null,
                "templatefolderid": 334,
                "createmodifydelete": 1
            }
        ],
        "foldername": "DEvLOPER",
        "templatefolderid": 334,
        "firmuseraccountid": 5272,
        "createmodifydelete": 1
    },
    {
        "templates": [
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "ddddddddddddddddd",
                "templatetype": "engagement",
                "DateofCreated": "2022-02-08 13:07:44.000000",
                "FirmTemplateID": 284,
                "mastertemplateid": null,
                "templatefolderid": 335,
                "createmodifydelete": 1
            },
            {
                "JsonFileName": "295_masterTemplate.json ",
                "JsonFilePath": "Engagements/masterTemplate/masterTemplate.json",
                "TemplateName": "Engagement Letter - Existing Standards",
                "templatetype": "engagement",
                "DateofCreated": "2022-02-23 15:53:04.000000",
                "FirmTemplateID": 295,
                "mastertemplateid": 1,
                "templatefolderid": 335,
                "createmodifydelete": 1
            }
        ],
        "foldername": "Readyy",
        "templatefolderid": 335,
        "firmuseraccountid": 5272,
        "createmodifydelete": 1
    },
    {
        "templates": [
            {
                "JsonFileName": "282_blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "Ready23451",
                "templatetype": "engagement",
                "DateofCreated": "2022-02-07 10:55:41.000000",
                "FirmTemplateID": 282,
                "mastertemplateid": null,
                "templatefolderid": 336,
                "createmodifydelete": 1
            }
        ],
        "foldername": "friends",
        "templatefolderid": 336,
        "firmuseraccountid": 5272,
        "createmodifydelete": 1
    },
    {
        "templates": [
            {
                "JsonFileName": "blankTemplate.json",
                "JsonFilePath": "Engagements/masterTemplate/blankTemplate.json",
                "TemplateName": "cxbjhvhdsvkjsdzVchxjkxc,cjxjhsddsjdjhchjzxcgjalssladfdslhflashlassssssssssssssssssssssssssssssssssss",
                "templatetype": "engagement",
                "DateofCreated": "2022-02-07 13:38:49.000000",
                "FirmTemplateID": 283,
                "mastertemplateid": null,
                "templatefolderid": 340,
                "createmodifydelete": 1
            },
            {
                "JsonFileName": "294_masterTemplate.json ",
                "JsonFilePath": "Engagements/masterTemplate/masterTemplate.json",
                "TemplateName": "Engagement Letter - Existing Standards",
                "templatetype": "engagement",
                "DateofCreated": "2022-02-22 12:07:14.000000",
                "FirmTemplateID": 294,
                "mastertemplateid": 1,
                "templatefolderid": 340,
                "createmodifydelete": 1
            }
        ],
        "foldername": "Asdghkjsdaklaskosjd,cxmalscs;sksakljajhjbcjsbjabcjshabcjhbchjbcjahcbjahcashjcbbjsahbchjbchjdcs",
        "templatefolderid": 340,
        "firmuseraccountid": 5272,
        "createmodifydelete": 1
    }
]
isAllSelected:boolean=false;

  ngOnInit(){

    // below logic is for setting up by default all checkboxes to be unselected.
    // for loop for folder and templates data to set by default unchecked and every folder to collapsed
    // please add this for each loop at where you are getting firm data. Here I have added in ngonint for my comfortable.
    this.dummydata.forEach(element => {
      element.isSelected = false;
      element.isClosed = true;
      if(element.templates){
        element.templates.forEach(childele => {
          childele.isSelected = false;
        });
      }      
    });
  }

  //Click event on folder checkbox, when we on folder checkbox, all templates under this folder should be checked and vice versa 
  parentCheck(parentObj) {
    for (var i = 0; i < parentObj.templates.length; i++) {
      parentObj.templates[i].isSelected = parentObj.isSelected;
    }
  }

  //Click event on template checkbox, when we on template checkbox, it should be checked
  childCheck(parentObj, childObj) {
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected == true;
    })
  }

  //select all event to select all folders and templates
  selectUnselectAll(obj) {
    for (var i = 0; i < this.dummydata.length; i++) {
      this.dummydata[i].isSelected = obj;
      for (var j = 0; j < this.dummydata[i].templates.length; j++) {
        this.dummydata[i].templates[j].isSelected = obj;
      }
    }
  }

  //Expand/Collapse event on each folder
  expandCollapse(obj) {
    obj.isClosed = !obj.isClosed;
  }

}
