# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from datetime import datetime

Base = declarative_base()

class Employer(Base):
    """description: Employers who have obligations when starting an employment relationship."""
    __tablename__ = 'employer'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    address = Column(String)

class Employee(Base):
    """description: Employee information required at the start of an employment relationship."""
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String)

class Contract(Base):
    """description: Employment contracts detailing terms and conditions of employment."""
    __tablename__ = 'contract'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    employer_id = Column(Integer, ForeignKey('employer.id'), nullable=False)
    start_date = Column(DateTime, default=datetime.now, nullable=False)
    end_date = Column(DateTime)

class HealthInsurance(Base):
    """description: Health insurance details provided to employees."""
    __tablename__ = 'health_insurance'
    id = Column(Integer, primary_key=True, autoincrement=True)
    provider = Column(String, nullable=False)
    policy_number = Column(String, nullable=False)

class EmployeeHealthInsurance(Base):
    """description: Link table connecting employees to their health insurance plans."""
    __tablename__ = 'employee_health_insurance'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    insurance_id = Column(Integer, ForeignKey('health_insurance.id'), nullable=False)

class Payroll(Base):
    """description: Payroll details for processing salaries and wages."""
    __tablename__ = 'payroll'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    salary = Column(Float, nullable=False)
    pay_date = Column(DateTime, default=datetime.now, nullable=False)

class TaxDetails(Base):
    """description: Tax information that employers must report and deduct."""
    __tablename__ = 'tax_details'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    tax_code = Column(String, nullable=False)
    tax_due_date = Column(DateTime)

class TrainingProgram(Base):
    """description: Training programs that new employees may need to undertake."""
    __tablename__ = 'training_program'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    duration_days = Column(Integer, nullable=False)

class EmployeeTraining(Base):
    """description: Link table connecting employees to their attended training programs."""
    __tablename__ = 'employee_training'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    training_id = Column(Integer, ForeignKey('training_program.id'), nullable=False)
    completion_date = Column(DateTime)

class EquipmentProvided(Base):
    """description: Equipment provided by employers to employees."""
    __tablename__ = 'equipment_provided'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    equipment_name = Column(String, nullable=False)

class LeaveEntitlement(Base):
    """description: Entitlement to leave for employees."""
    __tablename__ = 'leave_entitlement'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), nullable=False)
    leave_days = Column(Integer, nullable=False)

class WorkplaceSafety(Base):
    """description: Safety measures and trainings provided by employers."""
    __tablename__ = 'workplace_safety'
    id = Column(Integer, primary_key=True, autoincrement=True)
    employer_id = Column(Integer, ForeignKey('employer.id'), nullable=False)
    safety_protocol = Column(String, nullable=False)

# Setup the database and create tables
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
employers = [
    Employer(name="Tech Corp", address="123 Technology Ave"),
    Employer(name="Health Ltd.", address="456 Wellness Blvd")
]

employees = [
    Employee(name="Alice Johnson", position="Software Engineer"),
    Employee(name="Bob Smith", position="Data Analyst"),
    Employee(name="Charlie Brown", position="Systems Administrator"),
]

contracts = [
    Contract(employee_id=1, employer_id=1, start_date=datetime(2022, 1, 15)),
    Contract(employee_id=2, employer_id=1, start_date=datetime(2022, 3, 19)),
    Contract(employee_id=3, employer_id=2, start_date=datetime(2022, 5, 10))
]

health_insurances = [
    HealthInsurance(provider="Global Health", policy_number="GH123456"),
    HealthInsurance(provider="Wellness Assurance", policy_number="WA987654")
]

employee_health_insurances = [
    EmployeeHealthInsurance(employee_id=1, insurance_id=1),
    EmployeeHealthInsurance(employee_id=2, insurance_id=2)
]

payrolls = [
    Payroll(employee_id=1, salary=8000),
    Payroll(employee_id=2, salary=7500),
    Payroll(employee_id=3, salary=9000)
]

tax_details = [
    TaxDetails(employee_id=1, tax_code="TX1001"),
    TaxDetails(employee_id=2, tax_code="TX1002"),
    TaxDetails(employee_id=3, tax_code="TX1003")
]

training_programs = [
    TrainingProgram(name="Introduction to Programming", duration_days=5),
    TrainingProgram(name="Data Analysis Fundamentals", duration_days=3)
]

employee_trainings = [
    EmployeeTraining(employee_id=1, training_id=1, completion_date=datetime(2022, 6, 20)),
    EmployeeTraining(employee_id=2, training_id=2)
]

equipment_provided = [
    EquipmentProvided(employee_id=1, equipment_name="Laptop"),
    EquipmentProvided(employee_id=2, equipment_name="Data Analysis Software")
]

leave_entitlements = [
    LeaveEntitlement(employee_id=1, leave_days=14),
    LeaveEntitlement(employee_id=2, leave_days=14)
]

workplace_safeties = [
    WorkplaceSafety(employer_id=1, safety_protocol="Fire Safety Training"),
    WorkplaceSafety(employer_id=2, safety_protocol="Ergonomics Workshop")
]

# Add all instances to the session
session.add_all(employers + employees + contracts + health_insurances +
                employee_health_insurances + payrolls + tax_details +
                training_programs + employee_trainings + equipment_provided +
                leave_entitlements + workplace_safeties)

# Commit and close the session
session.commit()
session.close()
