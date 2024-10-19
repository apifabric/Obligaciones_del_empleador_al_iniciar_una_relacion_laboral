# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 19, 2024 16:46:55
# Database: sqlite:////tmp/tmp.bwUGFU2iVF/Obligaciones_del_empleador_al_iniciar_una_relacion_laboral/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Employee(SAFRSBaseX, Base):
    """
    description: Employee information required at the start of an employment relationship.
    """
    __tablename__ = 'employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    position = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ContractList : Mapped[List["Contract"]] = relationship(back_populates="employee")
    EmployeeHealthInsuranceList : Mapped[List["EmployeeHealthInsurance"]] = relationship(back_populates="employee")
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="employee")
    EquipmentProvidedList : Mapped[List["EquipmentProvided"]] = relationship(back_populates="employee")
    LeaveEntitlementList : Mapped[List["LeaveEntitlement"]] = relationship(back_populates="employee")
    PayrollList : Mapped[List["Payroll"]] = relationship(back_populates="employee")
    TaxDetailList : Mapped[List["TaxDetail"]] = relationship(back_populates="employee")



class Employer(SAFRSBaseX, Base):
    """
    description: Employers who have obligations when starting an employment relationship.
    """
    __tablename__ = 'employer'
    _s_collection_name = 'Employer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    address = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    ContractList : Mapped[List["Contract"]] = relationship(back_populates="employer")
    WorkplaceSafetyList : Mapped[List["WorkplaceSafety"]] = relationship(back_populates="employer")



class HealthInsurance(SAFRSBaseX, Base):
    """
    description: Health insurance details provided to employees.
    """
    __tablename__ = 'health_insurance'
    _s_collection_name = 'HealthInsurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeHealthInsuranceList : Mapped[List["EmployeeHealthInsurance"]] = relationship(back_populates="insurance")



class TrainingProgram(SAFRSBaseX, Base):
    """
    description: Training programs that new employees may need to undertake.
    """
    __tablename__ = 'training_program'
    _s_collection_name = 'TrainingProgram'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    duration_days = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    EmployeeTrainingList : Mapped[List["EmployeeTraining"]] = relationship(back_populates="training")



class Contract(SAFRSBaseX, Base):
    """
    description: Employment contracts detailing terms and conditions of employment.
    """
    __tablename__ = 'contract'
    _s_collection_name = 'Contract'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    employer_id = Column(ForeignKey('employer.id'), nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("ContractList"))
    employer : Mapped["Employer"] = relationship(back_populates=("ContractList"))

    # child relationships (access children)



class EmployeeHealthInsurance(SAFRSBaseX, Base):
    """
    description: Link table connecting employees to their health insurance plans.
    """
    __tablename__ = 'employee_health_insurance'
    _s_collection_name = 'EmployeeHealthInsurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    insurance_id = Column(ForeignKey('health_insurance.id'), nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeHealthInsuranceList"))
    insurance : Mapped["HealthInsurance"] = relationship(back_populates=("EmployeeHealthInsuranceList"))

    # child relationships (access children)



class EmployeeTraining(SAFRSBaseX, Base):
    """
    description: Link table connecting employees to their attended training programs.
    """
    __tablename__ = 'employee_training'
    _s_collection_name = 'EmployeeTraining'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    training_id = Column(ForeignKey('training_program.id'), nullable=False)
    completion_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EmployeeTrainingList"))
    training : Mapped["TrainingProgram"] = relationship(back_populates=("EmployeeTrainingList"))

    # child relationships (access children)



class EquipmentProvided(SAFRSBaseX, Base):
    """
    description: Equipment provided by employers to employees.
    """
    __tablename__ = 'equipment_provided'
    _s_collection_name = 'EquipmentProvided'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    equipment_name = Column(String, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("EquipmentProvidedList"))

    # child relationships (access children)



class LeaveEntitlement(SAFRSBaseX, Base):
    """
    description: Entitlement to leave for employees.
    """
    __tablename__ = 'leave_entitlement'
    _s_collection_name = 'LeaveEntitlement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    leave_days = Column(Integer, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("LeaveEntitlementList"))

    # child relationships (access children)



class Payroll(SAFRSBaseX, Base):
    """
    description: Payroll details for processing salaries and wages.
    """
    __tablename__ = 'payroll'
    _s_collection_name = 'Payroll'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    salary = Column(Float, nullable=False)
    pay_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("PayrollList"))

    # child relationships (access children)



class TaxDetail(SAFRSBaseX, Base):
    """
    description: Tax information that employers must report and deduct.
    """
    __tablename__ = 'tax_details'
    _s_collection_name = 'TaxDetail'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employee_id = Column(ForeignKey('employee.id'), nullable=False)
    tax_code = Column(String, nullable=False)
    tax_due_date = Column(DateTime)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("TaxDetailList"))

    # child relationships (access children)



class WorkplaceSafety(SAFRSBaseX, Base):
    """
    description: Safety measures and trainings provided by employers.
    """
    __tablename__ = 'workplace_safety'
    _s_collection_name = 'WorkplaceSafety'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    employer_id = Column(ForeignKey('employer.id'), nullable=False)
    safety_protocol = Column(String, nullable=False)

    # parent relationships (access parent)
    employer : Mapped["Employer"] = relationship(back_populates=("WorkplaceSafetyList"))

    # child relationships (access children)
